import React, { useState } from 'react';
import axios from 'axios';
import apiKeyData from './Api';
import { useLang } from '../../context/LanguageContext';
import { useTranslation } from '../../i18n';


const BusRegistration = ({ open }) => {
    const { lang: currentLanguage } = useLang();
    const t = useTranslation();
    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [bus, setBus] = useState('');
    const [phone, setPhone] = useState('');
    const [year, setYear] = useState('');
    
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);  
  
    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'cloudikarus')
      setLoading(true)
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/datr2hthy/image/upload',
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json()
  
      setImage(file.secure_url)
      console.log(file.secure_url);
      setLoading(false)
    }
  
	const Submit = (e) => {
		e.preventDefault();
        setDataLoading(true);
        const time = new Date().toLocaleString();
		const objt = { time, name, email, phone, bus, year, image};

        const sheetName = "Sheet1";
        const spreadsheetId = "1KMt7SjGP8deo2ZXrnzE9Yrx51Vu2-2S0uvb2K2FL4Hc";
        const apiKey = apiKeyData;
      
        const url = `https:///api.sheetson.com/v2/sheets/${sheetName}`;

        axios
			.post(
            		url,
                    objt,  
                    {
                headers: {
                "Authorization": `Bearer ${apiKey}`,
                "X-Spreadsheet-Id": spreadsheetId,
                "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": "*",
            },
            }

            	)
            	.then((response) => {
                		console.log(response);
                        setSent(true);
                        setDataLoading(false);
                	})
                .catch((error) => {
                        console.log(error);
                        setDataLoading(false);
                    });
                
		// axios
		// 	.post(
        //     		'https://sheet.best/api/sheets/c87186c5-8294-4f63-9a83-00aef3287774',
        //     		objt
        //     	)
        //     	.then((response) => {
        //         		console.log(response);
        //                 setSent(true);
        //         	})
        //         .catch((error) => {
        //                 console.log(error);
        //             });
                
        e.target.reset();
        if(sent===true){
            setName('');
        setEmail('');
        setBus('');
        setPhone('');
        setYear('');
        setImage(null);
        }
        console.log(objt);
	};

    return (
        <>
        {open && (
            <section className="event" id="registration">
                <div className={`box ${currentLanguage === "hu" ? "boxHu" : "boxEn"}`} id="reg">
                    <h1>{t.busReg.formTitle}</h1>
                    <form className="form" onSubmit={(e) => Submit(e)}>
                        <h3 style={{ fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>{t.busReg.owner}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '5px' }}>
                            <label style={{ width: '144px', flexShrink: 0 }}>{t.busReg.namePlaceholder}</label>
                            <input required onChange={(e) => setName(e.target.value)} className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '5px' }}>
                            <label style={{ width: '144px', flexShrink: 0 }}>E-mail</label>
                            <input id="email" required type="email" onChange={(e) => setEmail(e.target.value)} className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '5px' }}>
                            <label style={{ width: '144px', flexShrink: 0 }}>{t.busReg.phonePlaceholder}</label>
                            <input required onChange={(e) => setPhone(e.target.value)} className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded" />
                        </div>
                        <h3 style={{ fontWeight: '600', marginTop: '24px', marginBottom: '8px' }}>{t.busReg.busType}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '5px' }}>
                            <label style={{ width: '144px', flexShrink: 0 }}>{t.busReg.typePlaceholder}</label>
                            <input required onChange={(e) => setBus(e.target.value)} className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded" />
                        </div>
                        <h3 style={{ fontWeight: '600', marginTop: '24px', marginBottom: '8px' }}>{t.busReg.yearLabel}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '5px' }}>
                            <label style={{ width: '144px', flexShrink: 0 }}>{t.busReg.yearPlaceholder}</label>
                            <input required onChange={(e) => setYear(e.target.value)} className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded" />
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
                            if (loading) {
                                return <h3>{t.busReg.loadingImage}</h3>;
                            } else if (!loading && image) {
                                return <img alt=" " src={image} style={{ width: '200px' }} />;
                            } else if (dataLoading) {
                                return <h3>{t.busReg.loadingData}</h3>;
                            } else if (sent && !dataLoading) {
                                return <strong>{t.busReg.thanks}</strong>;
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
