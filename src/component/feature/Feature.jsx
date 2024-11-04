import React from 'react';
import { FaMoneyBillWave, FaTruck, FaHeadset, FaLock } from 'react-icons/fa';

export default function Feature() {
  return (
    <>
        <section className="Feature py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 text-center rounded-lg shadow-lg ">
            <div className="text-blue-500 flex justify-center pb-4 text-3xl mr-4">
              <FaMoneyBillWave  />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Money Back Guarantee</h3>
              <p className="text-gray-600">Shall open divide a one</p>
            </div>
          </div>

          <div className="bg-white p-6 text-center rounded-lg shadow-lg ">
            <div className="text-green-500 text-3xl flex justify-center pb-4 mr-4">
              <FaTruck />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">Shall open divide a one</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg text-center shadow-lg ">
            <div className="text-red-500 text-3xl flex justify-center pb-4 mr-4">
              <FaHeadset />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Always Support</h3>
              <p className="text-gray-600">Shall open divide a one</p>
            </div>
          </div>

          <div className="bg-white p-6  text-center rounded-lg shadow-lg ">
            <div className="text-purple-500 text-3xl flex justify-center pb-4 mr-4">
              <FaLock />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Shall open divide a one</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>

  );
}
