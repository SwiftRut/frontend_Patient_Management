import React, { useState } from 'react';

const AddFieldModal = ({ isOpen, onClose, onAddField }) => {
    const [fieldType, setFieldType] = useState('Dropdown');
    const [selectionType, setSelectionType] = useState('Single');
    const [fieldName, setFieldName] = useState('');
    const [options, setOptions] = useState(['']);
    
    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOption = () => setOptions([...options, '']);
    const removeOption = (index) => setOptions(options.filter((_, i) => i !== index));

    const handleAdd = () => {
        if (!fieldName.trim()) {
            alert('Please enter a field name.');
            return;
        }
    
        onAddField({
            fieldType,
            selectionType: fieldType === 'Dropdown' ? selectionType : null,
            name: fieldName,
            options: fieldType === 'Dropdown' ? options.filter(opt => opt.trim()) : null,
        });
    
        // Reset the fields
        setFieldType('Dropdown');
        setSelectionType('Single');
        setFieldName('');
        setOptions(['']);
        onClose();
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                    <h2 className="text-lg font-semibold mb-4">Add New Field</h2>

                    <div className="mb-4">
                        <label className="mr-2">
                            <input 
                                type="radio" 
                                name="fieldType" 
                                value="Dropdown" 
                                checked={fieldType === 'Dropdown'}
                                onChange={() => setFieldType('Dropdown')}
                                className="mr-1" 
                            />
                            Dropdown
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="fieldType" 
                                value="Text Field" 
                                checked={fieldType === 'Text Field'}
                                onChange={() => setFieldType('Text Field')}
                                className="mr-1" 
                            />
                            Text Field
                        </label>
                    </div>

                    {fieldType === 'Dropdown' && (
                        <div className="mb-4">
                            <label className="block mb-2 text-sm">Selection</label>
                            <select 
                                value={selectionType} 
                                onChange={(e) => setSelectionType(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="Single">Single</option>
                                <option value="Multiple">Multiple</option>
                            </select>
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block mb-2 text-sm">Field Name</label>
                        <input
                            type="text"
                            value={fieldName}
                            onChange={(e) => setFieldName(e.target.value)}
                            placeholder="Enter Field Name"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    {fieldType === 'Dropdown' && (
                        <div className="mb-4">
                            <label className="block mb-2 text-sm">Options</label>
                            {options.map((option, index) => (
                                <div key={index} className="flex items-center mb-2">
                                    <input
                                        type="text"
                                        value={option}
                                        onChange={(e) => handleOptionChange(index, e.target.value)}
                                        placeholder={`Value ${index + 1}`}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeOption(index)}
                                        className="ml-2 text-red-500"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addOption}
                                className="text-blue-500 text-sm mt-1"
                            >
                                + Add Option
                            </button>
                        </div>
                    )}

                    <div className="flex justify-end mt-4">
                        <button 
                            onClick={onClose} 
                            className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleAdd} 
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default AddFieldModal;