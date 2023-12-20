import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="contact-page p-8 flex flex-wrap justify-center">
            <div className="hero min-h-screen bg-base-200 flex-1 flex justify-center items-center text-center w-full">
                <div>
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <div className="text-left mb-4">
                        <p><strong>Location:</strong> Islamic University, Kushtia, Bangladesh</p>
                        <p><strong>Email:</strong> info@taiseeredu.com</p>
                        <p><strong>Phone:</strong> +8801313617248</p>
                        <div className="flex items-center mb-2">
                            <span className="mr-2">LinkedIn:</span>
                            <Link to="#" target="_blank" rel="noreferrer">
                                LinkedIn
                            </Link>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2">Facebook:</span>
                            <Link Link to="#" target="_blank" rel="noreferrer">
                                Facebook
                            </Link>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2">Twitter:</span>
                            <Link to="" target="_blank" rel="noreferrer">
                                Twitter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-8 w-full max-w-sm shadow-2xl bg-base-100 flex-1">
                <div className="card-body">
                    <h2 className="text-2xl mb-4">Message us</h2>
                    <form className="mb-6">
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-bold mb-2">Name</label>
                            <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-bold mb-2">Email</label>
                            <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block font-bold mb-2">Message</label>
                            <textarea id="message" className="w-full p-3 border border-gray-300 rounded h-32"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                            Send Message
                        </button>
                    </form>
                    <p>
                        Feel free to reach out using the form above, or contact me directly via email at <strong>info@taiseeredu.com</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;