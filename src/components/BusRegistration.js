import React, { useState } from 'react';
import axios from 'axios';


const BusRegistration = (props) => {
    const { currentLanguage, open } = props;
    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [bus, setBus] = useState('');
    const [phone, setPhone] = useState('');
    const [year, setYear] = useState('');
    
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
  
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
        
		const objt = { name, email, phone, bus, year, image };
        
        console.log(objt);
        
		axios
			.post(
            		'https://sheet.best/api/sheets/c87186c5-8294-4f63-9a83-00aef3287774',
            		objt
            	)
            	.then((response) => {
                		console.log(response);
                        setSent(true);
                	})
                .catch((error) => {
                        console.log(error);
                    });
                
        e.target.reset();
        setName('');
        setEmail('');
        setBus('');
        setPhone('');
        setYear('');
        setImage(null);
        console.log(objt);
	};

    return (
        <>
        {open && (
            <section className="event" id="registration">
                {currentLanguage === "hu" ? (
                <div className="box boxHu" id="reg">
                    <h1>BUSZ REGISZTRÁCIÓS ŰRLAP</h1>
                    <form className="form" onSubmit={(e)=>Submit(e)}>
                        <label>Tulajdonos</label>
                            <input required placeholder="Név" onChange={(e) => setName(e.target.value)}/>                        
                        <br />                  
                        <label>                      
                            <input required type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>  
                        </label>    
                        <label>                      
                            <input required placeholder="Telefon" onChange={(e) => setPhone(e.target.value)}/>  
                        </label>  
                        <br />                   
                        <label>Ikarus busz típusa</label>
                            <input required placeholder="Típus" onChange={(e) => setBus(e.target.value)}/>
                        <label>Évjárat</label>
                            <input required placeholder="Évjárat" onChange={(e) => setYear(e.target.value)}/>                        
                        <br />          
                        <br />               
                        <label>Fotó feltöltése(1db)</label>                            
                        <input
                            type="file"
                            name="file"
                            accept="image/*"
                            onChange={uploadImage}
                        />
                         {(() => {
                            if (loading) {
                            return (
                                <h3>Loading...</h3>
                            )
                            } else if (!loading && image) {
                            return (
                                <img alt=" " src={image} style={{ width: '200px' }} />
                            )
                            } else if (sent) {
                                return (
                                    <p>Regisztrációját köszönjük!</p>
                                )
                            }
                        })()}
                        <br />
                        <input className="button" type="submit"/>                     
                    </form>
                </div>
                ) : (
                <div className="box boxEn" id="reg">
                    <h1>BUS REGISTRATION</h1>
                    <form className="form" onSubmit={(e)=>Submit(e)}>
                        <label>Owner</label>
                            <input required placeholder="Name" onChange={(e) => setName(e.target.value)}/>                        
                        <br />                  
                        <label>                      
                            <input required type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>  
                        </label>    
                        <label>                      
                            <input required placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>  
                        </label>  
                        <br />                   
                        <label>Type of Ikarus bus</label>
                            <input required placeholder="Type" onChange={(e) => setBus(e.target.value)}/>
                        <label>Year</label>
                            <input required placeholder="Year" onChange={(e) => setYear(e.target.value)}/>                        
                        <br />          
                        <br />               
                        <label>Photo upload</label>                            
                        <input
                            type="file"
                            name="file"
                            accept="image/*"
                            onChange={uploadImage}
                        />
                         {(() => {
                            if (loading) {
                                return (
                                    <h3>Loading...</h3>
                                )
                            } else if (!loading && image) {
                                return (
                                    <img alt=" " src={image} style={{ width: '200px' }} />
                                )                    
                            } else if (sent) {
                                return (
                                    <strong>Thank you for your registration!</strong>
                                )
                            }
                        })()}
                        <br />
                        <input className="button" type="submit"/>                     
                    </form>
                </div>
                )}
            </section>
        )}
      </>
    );
  };

  export default BusRegistration;
