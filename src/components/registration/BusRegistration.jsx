import React, { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import { useTranslation } from '../../i18n';

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

const initialForm = { name: '', email: '', bus: '', phone: '', year: '' };
const initialStatus = { image: '', loading: false, sent: false, dataLoading: false, error: false };

const BusRegistration = ({ open }) => {
    const { lang: currentLanguage } = useLang();
    const t = useTranslation();
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState(initialStatus);

    const setField = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

    const uploadImage = async e => {
      const files = e.target.files;
      if (!files || !files[0]) return;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'cloudikarus');
      setStatus(prev => ({ ...prev, loading: true, error: false }));
      try {
        const res = await fetch('https://api.cloudinary.com/v1_1/datr2hthy/image/upload', { method: 'POST', body: data });
        const file = await res.json();
        if (!res.ok) {
          console.error('Cloudinary error:', file);
          setStatus(prev => ({ ...prev, loading: false, error: true }));
          return;
        }
        setStatus(prev => ({ ...prev, image: file.secure_url, loading: false }));
      } catch (err) {
        console.error('Upload failed:', err);
        setStatus(prev => ({ ...prev, loading: false, error: true }));
      }
    };

    const Submit = (e) => {
        e.preventDefault();
        setStatus(prev => ({ ...prev, dataLoading: true }));
        const time = new Date().toLocaleString();
        const objt = { time, ...form, image: status.image };

        const formData = new URLSearchParams();
        Object.entries(objt).forEach(([key, val]) => formData.append(key, val ?? ''));

        fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData,
        })
        .then(() => {
            setForm(initialForm);
            setStatus({ image: '', loading: false, sent: true, dataLoading: false, error: false });
            setTimeout(() => setStatus(initialStatus), 30000);
        })
        .catch((error) => {
            console.log(error);
            setStatus(prev => ({ ...prev, dataLoading: false, error: true }));
        });

        e.target.reset();
        console.log(objt);
    };

    return (
        <>
        {status.sent && (
            <section className="event" id="registration">
                <div className={`box ${currentLanguage === "hu" ? "boxHu" : "boxEn"}`} id="reg">
                    <div style={{ padding: '20px 0' }}>
                        <strong style={{ fontSize: '1.4rem', color: '#22c55e', fontWeight: 'bold', display: 'block', textAlign: 'center' }}>{t.busReg.thanks}</strong>
                    </div>
                </div>
            </section>
        )}
        {open && !status.sent && (
            <section className="event" id="registration">
                <div className={`box ${currentLanguage === "hu" ? "boxHu" : "boxEn"}`} id="reg">
                    <h1>{t.busReg.formTitle}</h1>
                    <form className="form" onSubmit={(e) => Submit(e)}>
                        <h3 style={{ fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>{t.busReg.owner}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '5px' }}>
                            <label style={{ width: '144px', flexShrink: 0 }}>{t.busReg.namePlaceholder}</label>
                            <input required onChange={setField('name')} className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '5px' }}>
                            <label style={{ width: '144px', flexShrink: 0 }}>E-mail</label>
                            <input id="email" required type="email" onChange={setField('email')} className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '5px' }}>
                            <label style={{ width: '144px', flexShrink: 0 }}>{t.busReg.phonePlaceholder}</label>
                            <input required onChange={setField('phone')} className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded" />
                        </div>
                        <h3 style={{ fontWeight: '600', marginTop: '24px', marginBottom: '8px' }}>{t.busReg.busType}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '5px' }}>
                            <label style={{ width: '144px', flexShrink: 0 }}>{t.busReg.typePlaceholder}</label>
                            <input required onChange={setField('bus')} className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded" />
                        </div>
                        <h3 style={{ fontWeight: '600', marginTop: '24px', marginBottom: '8px' }}>{t.busReg.yearLabel}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '5px' }}>
                            <label style={{ width: '144px', flexShrink: 0 }}>{t.busReg.yearPlaceholder}</label>
                            <input required onChange={setField('year')} className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '5px' }}>
                            <label style={{ width: '144px', flexShrink: 0 }}>{t.busReg.photoLabel}</label>
                            <label className="cursor-pointer">
                                <span style={{ backgroundColor: '#9ca3af', color: '#fff', borderRadius: '4px', border: 'solid 1px #6b7280', padding: '3px 8px', fontSize: 'small', display: 'inline-block' }}
                                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#6b7280'; }}
                                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#9ca3af'; }}
                                >{t.busReg.photoLabel}</span>
                                <input
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    onChange={uploadImage}
                                    className="hidden"
                                />
                            </label>
                        </div>
                        {(() => {
                            if (status.sent && !status.dataLoading) {
                                return <div style={{ margin: '12px 0', padding: '10px 16px', backgroundColor: '#dcfce7', borderRadius: '6px', border: '1px solid #22c55e' }}>
                                    <strong style={{ fontSize: '1.2rem', color: '#16a34a', fontWeight: 'bold' }}>{t.busReg.thanks}</strong>
                                </div>;
                            } else if (status.error) {
                                return <strong style={{ fontSize: '1.1rem', color: '#ff4444', fontWeight: 'bold' }}>{t.busReg.errorData}</strong>;
                            } else if (status.dataLoading) {
                                return <strong style={{ fontSize: '1.1rem', color: '#ff4444', fontWeight: 'bold' }}>{t.busReg.loadingData}</strong>;
                            } else if (status.loading) {
                                return <h3>{t.busReg.loadingImage}</h3>;
                            } else if (!status.loading && status.image) {
                                return <img alt=" " src={status.image} style={{ width: '200px' }} />;
                            }
                        })()}
                        <br />
                        <input className="button" type="submit" />
                    </form>
                </div>
            </section>
        )}
      </>
    );
  };

  export default BusRegistration;
