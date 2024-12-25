import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans md:mt-20 mt-16">
      <div className="container mx-auto px-8 py-16 max-w-6xl">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e73be] mb-6 tracking-wider">
            Voyagers Beat: Your Gateway to Adventure
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Founded in 2017,{" "}
            <span className="font-semibold">Voyagers Beat </span>
            is your trusted companion for extraordinary journeys. From hidden
            gems to breathtaking destinations, we go beyond the usual to
            redefine your travel experiences.
          </p>
        </section>

        {/* Founder Section */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Meet the Visionary Behind the Journey
          </h2>
          <p className="leading-relaxed text-gray-700 text-center">
            At the heart of Voyagers Beat is{" "}
            <span className="font-semibold">Mr. Vaibhav Sethi</span>, a
            trailblazer who left a successful career in software engineering to
            follow his passion for travel. With over 70 destinations under his
            belt, he turned a dream into reality, building Voyagers Beat from a
            humble beginning into a thriving community.
          </p>
        </section>

        {/* Who We Are Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#1e73be] mb-6">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We are explorers, dreamers, and planners. Whether it’s a solo
            adventure, a romantic honeymoon, or a group expedition,{" "}
            <span className="font-semibold">Voyagers Beat</span> is your
            one-stop destination for bespoke travel experiences.
          </p>
        </section>

        {/* What We Offer Section */}
        <section className="bg-gradient-to-br from-blue-100 to-[#e0f4fc] p-8 md:p-12 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-bold text-[#1e73be] mb-6 text-center">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 md:text-lg">
            <li>
              <span className="font-semibold">Transportation:</span> Reliable
              and comfortable travel arrangements.
            </li>
            <li>
              <span className="font-semibold">Accommodation:</span> Unique and
              picturesque lodgings tailored to your preferences.
            </li>
            <li>
              <span className="font-semibold">Culinary Delights:</span> Savor
              local and global cuisines for an authentic experience.
            </li>
            <li>
              <span className="font-semibold">Privacy Options:</span> Special
              arrangements for solo female travelers and couples.
            </li>
            <li>
              <span className="font-semibold">Exciting Activities:</span>
              Bonfires, adventure sports, and cultural immersion.
            </li>
            <li>
              <span className="font-semibold">Expert Guidance:</span> Dedicated
              trip managers to ensure hassle-free travel.
            </li>
            <li>
              <span className="font-semibold">24/7 Support:</span> Always by
              your side during your journey.
            </li>
          </ul>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#1e73be] mb-6 text-center">
            Why Choose Voyagers Beat?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="md:text-2xl text-xl font-semibold text-[#1e73be] mb-3">
                ✅ Value & Peace of Mind
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent pricing with everything you need included.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="md:text-2xl text-xl font-semibold text-[#1e73be] mb-3">
                🌍 Authentic Experiences
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Travel like a local and discover the world in its purest form.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="md:text-2xl text-xl font-semibold text-[#1e73be] mb-3">
                💙 Responsible Travel
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting local communities and leaving a positive impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="md:text-2xl text-xl font-semibold text-[#1e73be] mb-3">
                👫 Small-Group Adventures
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with fellow travelers and build lasting friendships.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Your Next Adventure Awaits
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Embrace the joy of exploration and embark on a journey that
            resonates with your soul. Start your adventure with us today.
          </p>
          <a
            href="https://wa.me/8448591315"
            className="inline-block bg-[#1e73be] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#145a8a] transition duration-300"
          >
            Plan Your Trip Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
