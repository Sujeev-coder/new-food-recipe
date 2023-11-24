import React from 'react'

const Products = ({ data }) => {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">


            {data.map(data =>


                <div  className="flex justify-center">

                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white ">


                        <img class="w-full" src={data.recipe.image} alt="Card image" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{data.recipe.label}</div>
                        </div>

                        <div class="px-6 py-4">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag1</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag2</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Tag3</span>
                        </div>



                    </div>


                </div>


            )}


        </div>


    )
}

export default Products
