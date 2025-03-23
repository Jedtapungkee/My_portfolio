import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="text-white p-5  pt-36 -mt-36">
        <h1 className="text-[#007cf0]">Contact</h1>
      <h2 className="text-[#007cf0] text-5xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-6 text-2xl">
        would like to work together, please feel free to contact me.
      </p>

      {/* ฟอร์มตัวอย่าง (ส่งผ่าน formsubmit.co หรือจะเปลี่ยนเป็น EmailJS ก็ได้) */}
      <form
        action="https://formsubmit.co/Jedtapungkee.c@ku.th" // <--- ใส่อีเมลที่คุณต้องการรับข้อความ
        method="POST"
        className="max-w-md mx-auto space-y-4"
      >
        {/* ป้องกันสแปมเบื้องต้น */}
        <input type="hidden" name="_subject" value="New message from your portfolio!" />
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label htmlFor="name" className="block mb-1 font-semibold text-gray-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-semibold text-gray-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-semibold text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2
                     rounded font-semibold transition-colors w-full sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
