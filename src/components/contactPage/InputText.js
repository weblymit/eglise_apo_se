import React from "react";

function InputText({ label, name, id, type }) {
	return (
		<div className=''>
			<label htmlFor={name} className='font-bold text-gray-600'>
				{label}
				<span className='text-red-500'>*</span>
			</label>
			<input
				type={type}
				ref={name}
				name={name}
				id={id}
				className='mt-2 mb-4 p-3 w-full border rounded-lg'
				required
			/>
		</div>
	);
}

export default InputText;
