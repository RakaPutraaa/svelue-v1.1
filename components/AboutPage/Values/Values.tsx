/* eslint-disable react/jsx-sort-props */
"use client";

const Values = () => {
  return (
    <section className="container mx-auto py-16 px-4 bg-zinc-900/50">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-gray-300">
          The principles that guide our work and relationships with clients.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-400"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Quality</h3>
          <p className="text-gray-300">
            We never compromise on quality, ensuring every project meets the
            highest standards of excellence.
          </p>
        </div>

        <div className="text-center">
          <div className="h-16 w-16 rounded-full bg-pink-500/10 flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pink-400"
            >
              <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              <path d="M12 8v-2" />
              <path d="M12 18v-2" />
              <path d="M16 12h2" />
              <path d="M6 12h2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Innovation</h3>
          <p className="text-gray-300">
            We embrace new technologies and creative approaches to solve complex
            problems and create unique solutions.
          </p>
        </div>

        <div className="text-center">
          <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-400"
            >
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Client Focus</h3>
          <p className="text-gray-300">
            Your success is our success. We listen carefully to your needs and
            work collaboratively to achieve your goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
