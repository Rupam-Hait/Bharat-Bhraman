import React from 'react';

const MapModal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                >
                    ✕
                </button>
                <img
                    src={imageSrc}
                    alt="Full map of India"
                    className="w-full h-auto rounded-b-lg"
                />
            </div>
        </div>
    );
};

export default MapModal;
