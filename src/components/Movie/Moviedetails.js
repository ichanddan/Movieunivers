import { Image } from '@nextui-org/image'
import React from 'react'

export const Moviedetails = () => {
  return (
    <div className="py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
            <Image
              src="/earburd.png"
              width={450}
              height={450}
              alt="earburd"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Redmi Buds 4 Active - Air White 12mm Drivers Premium Sound Quality
            Up to 30 Hours Battery Life Google Fast Pair IPX4 Bluetooth 5.3
            ENC Up to 60ms Low Latency Mode App Support
          </h1>
          {/* <Rating name="size-large" defaultValue={4} size="large" /> */}
          <div className="flex mb-4">
            <div className="mr-4">
              <p className="font-bold text-gray-700 dark:text-gray-300 text-2xl">
                Price 1500
              </p>
            </div>
            <div>
              <p className="text-green-600 dark:text-gray-300">In Stock</p>
            </div>
          </div>

          <div>
            <p className="font-bold text-gray-700 dark:text-gray-300">
              Product Description
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              Introducing Redmi Buds 4 Active the ultimate companion for
              immersive audio enthusiasts. With its powerful 12mm Bass Pro
              drivers these earbuds deliver an unparalleled audio experience
              providing deep rich bass and crisp clear highs. Whether you re
              enjoying your favourite music or engaging in intense gaming
              sessions Redmi Buds 4 Active ensures you feel the rhythm like
              never before.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
