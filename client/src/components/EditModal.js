import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../services/auth.constants";

function EditModal({ isVisible, setShowModal, modalData, form, setForm }) {
    if (!isVisible) return null;

    function handleChange(key, value) {
        setForm({
          ...form,
          [key]: value,
        });
    }

    function handleClose() {
        setShowModal(false);
    }
    
    function update() {
        axios.patch(API_URL + `listings/${modalData.id}/`, {
            title: form.title,
            description: form.description,
            price: form.price
        })
        .then((resp) => (console.log(resp)))
        window.location.reload(true)
    }

    
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex z-40 items-center"
            id="wrapper"
        >
            <button
                className="fixed left-2 top-2 rounded-full bg-white px-3 py-1 "
                onClick={handleClose}
            >
                X
            </button>
            <div className="mx-auto h-2/5 bg-mtgray rounded-lg p-2">
                <div className="text-lg font-bold text-center flex justify-between"><div>EDITING MODE</div> <button onClick={handleClose}>X</button></div>
                <div className="flex justify-between m-2 items-center space-x-2">
                    <label htmlFor="title">Title:</label>
                    <input
                        className="border rounded-lg"
                        type="text"
                        id="title"
                        value={form.title}
                        required
                        onChange={(e) => handleChange("title", e.target.value)}
                    />
                </div>
                <div className="flex justify-between m-2 space-x-2">
                    <label htmlFor="description">Description:</label>
                    <input
                        className="border rounded-lg"
                        type="text"
                        id="description"
                        value={form.description}
                        required
                        onChange={(e) => handleChange("price", e.target.value)}
                    />
                </div>
                <div className="flex justify-between m-2 items-center space-x-2">
                    <label htmlFor="price">Price:</label>
                    <input
                        className="border rounded-lg"
                        type="text"
                        id="price"
                        value={form.price}
                        required
                        onChange={(e) => handleChange("price", e.target.value)}
                    />
                </div>
                {/* <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="location">Location:</label>
            <input
                className="border"
                type="text"
                id="location"
                value={modalData.location}
                required
                onChange={(e) => handleChange("location", e.target.value)}
            />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="category">Category:</label>
            <input
                className="border"
                type="text"
                id="category"
                value={modalData.category[0].name}
                required
                onChange={(e) => handleChange("category", e.target.value)}
            />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
            <label htmlFor="image">Image:</label>
            <input
                className="border"
                type="text"
                id="image"
                value={modalData.Image}
                required
                onChange={(e) => handleChange("image", e.target.value)}
            />
            </div> */}
            <button className="btn mx-auto flex" onClick={update}>Update Listing</button>
            </div>
        </div>
    );
}

export default EditModal;
