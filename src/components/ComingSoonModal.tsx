"use client";

import React from 'react';
import './ComingSoonModal.css';

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body text-center">
                    <div className="modal-icon">🚀</div>
                    <h2 className="heading-md">Coming Soon</h2>
                    <p>We're working hard to bring this feature to you. Stay tuned for updates!</p>
                    <button className="btn btn-primary mt-2" onClick={onClose}>Got it</button>
                </div>
            </div>
        </div>
    );
}
