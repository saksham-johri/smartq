import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../../context';
import './style.scss';
const Payment = () => {
	const { paymentMethods = [], clearCart = () => {} } = useContext(Context);
	const history = useHistory();
	const [selectedMethod, setSelectedMethod] = useState('');

	useEffect(() => {
		setSelectedMethod(paymentMethods?.[0]?.value);
	}, [paymentMethods]);

	const handleSubmit = e => {
		e?.preventDefault();
		clearCart();
		history?.push('/');
	};

	return (
		<div className='container2'>
			<div className='heading pb-0'>Order details</div>
			<div className='heading event'>Event details</div>

			<div className='card-container'>
				<Form className='card-container-form'>
					<Form.Group controlId='name' className='mb-3'>
						<Form.Label>Name</Form.Label>

						<Form.Control type='text' required />
					</Form.Group>
					<Form.Group controlId='number' className='mb-3'>
						<Form.Label>Contact Number</Form.Label>

						<Form.Control type='number' maxLength='10' required />
					</Form.Group>
					<Form.Group controlId='name' className='mb-3'>
						<Form.Label>Event Name</Form.Label>

						<Form.Control type='text' required />
					</Form.Group>
					<Form.Group controlId='name' className='mb-3'>
						<Form.Label>Event Location</Form.Label>

						<Form.Control type='text' required />
					</Form.Group>
					<Form.Group controlId='name' className='mb-3'>
						<Form.Label>Event Date</Form.Label>
						<Form.Control type='date' required />
					</Form.Group>
					<Form.Group controlId='name' className='mb-3'>
						<Form.Label>Delivery Mode</Form.Label>
						<Form.Control type='text' required />
					</Form.Group>
				</Form>
			</div>
			<div className='heading event'>Select payment method</div>

			<div className='card-container container'>
				<Form>
					{paymentMethods?.map((ele, i) => {
						return (
							<span key={i} className='card-container-span'>
								<input
									type='radio'
									value={ele?.value}
									onChange={() => {
										setSelectedMethod(ele?.value);
									}}
									checked={selectedMethod === ele?.value}
								/>
								{ele?.label}
							</span>
						);
					})}
					<div className='floatRight'>
						<button className='primary' type='submit' onClick={handleSubmit}>
							Make Payment
						</button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default Payment;
