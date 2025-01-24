'use client';

import { useState } from 'react';
import Link from 'next/link'



export default function AddressForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    postalCode: '',
    city: '',
    country: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically submit the formData to your backend or handle it as needed.
    console.log('Form data submitted:', formData);
    // Example: Redirect to next checkout step
    
  };

  return (

    <div className="container mt-5">


    <div className='mt-4'>
    <Link href="/cart">
        <button className="btn btn-outline-primary mt-4 d-block">
            Regresar al carrito
        </button>
    </Link>

    </div>




      <h2>Datos de Envío</h2>
      <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>

        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>


        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>




        <div className="col-12">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input type="text" className="form-control" id="address" name="address" placeholder="Calle, número, etc." value={formData.address} onChange={handleChange} required />
        </div>


        <div className="col-12">
          <label htmlFor="address2" className="form-label">Dirección 2 (Opcional)</label>
          <input type="text" className="form-control" id="address2" name="address2" placeholder="Apartamento, suite, etc." value={formData.address2} onChange={handleChange} />
        </div>



        <div className="col-md-4">
          <label htmlFor="city" className="form-label">Ciudad</label>
          <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>


        <div className="col-md-4">
          <label htmlFor="postalCode" className="form-label">Código Postal</label>
          <input type="text" className="form-control" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </div>





        <div className="col-md-4">
          <label htmlFor="country" className="form-label">País</label>
          <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleChange} required />
        </div>




        <div className="col-12">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>


        <div className="col-12 mt-4">
        <Link href="/checkout">
        <button type="submit" className="btn btn-primary">Siguiente</button>
       </Link>
        </div>
      </form>
    </div>

  );
}
