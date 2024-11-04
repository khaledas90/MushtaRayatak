import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 px-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-2/12 md:w-6/12 mb-8">
            <h4 className="text-xl font-semibold mb-6 text-gray-900">Top Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Managed Website</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Manage Reputation</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Power Tools</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Marketing Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-2/12 md:w-6/12 mb-8">
            <h4 className="text-xl font-semibold mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Jobs</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Brand Assets</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Investor Relations</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-2/12 md:w-6/12 mb-8">
            <h4 className="text-xl font-semibold mb-6 text-gray-900">Features</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Jobs</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Brand Assets</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Investor Relations</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-2/12 md:w-6/12 mb-8">
            <h4 className="text-xl font-semibold mb-6 text-gray-900">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Guides</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Research</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Experts</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-600">Agencies</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 md:w-6/12 mb-8">
            <h4 className="text-xl font-semibold mb-6 text-gray-900">Newsletter</h4>
            <p className="text-gray-600 mb-6">You can trust us. We only send promo offers.</p>
            <form
              target="_blank"
              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
              method="get"
              className="flex items-center space-x-3"
            >
              <input
                className="form-control w-full p-2 border border-gray-300 rounded-lg"
                name="EMAIL"
                placeholder="Your Email Address"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Your Email Address")}
                required
                type="email"
              />
              <button className=" px-10 py-3 text-sm font-semibold text-white bg-[#efab31] rounded-md shadow-lg hover:bg-[#eb423f] transition ">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between pt-8 border-t border-gray-200 mt-8">
          <p className="text-gray-600 text-sm lg:w-8/12 w-full">
            &copy; {new Date().getFullYear()} All rights reserved | This Ecommerce is made with{" "}
            <i className="fa fa-heart-o text-red-600"></i> by{" "}
            <a
              href="https://khaled.com"
              target="_blank"
              className="ownerName hover:text-green-600 transition duration-300"
              rel="noopener noreferrer"
            >
              Khaled Ahmed
            </a>
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
