import React from 'react'

function Profile() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
        <div className="mx-auto max-w-md text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Cars</h2>

            <p className="mt-4 text-gray-500">
            Great special offer Benefits that IMI Thailand provides to customers and Audi fans. Carry a train with special prices for every segment. Whether it be combustion engine cars, EVs, and plug-in hybrids. The entire car is imported and assembled outside of German quality standards. The starting price is less than 2 million baht.
            </p>
          </header>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#" className="group block">
              <img
                src="https://www.checkraka.com/uploaded/gallery/fc/fcb1dbc8396903300376dea7f29dfc87.jpg"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Volvo-EX40 Ultra - Twin Motor Black Edition-ปี 2024
                </h3>

                <p className="mt-1 text-sm text-gray-700">$3500</p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block">
              <img
                src="https://www.checkraka.com/uploaded/logo/fd/fd3b5e6752edd6f69686a48bdd6acfac.webp"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  BMW Series 7 บีเอ็มดับเบิลยู ซีรีส์7
                </h3>

                <p className="mt-1 text-sm text-gray-700">$4500</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default Profile