import React from "react";

const Body  = () => {

    var array = ["dog", "cat", "frog",];

    return (
        <>
            {
                array.map((element) => {

                    return (
                        <div>
                            {element}
                        </div>
                    )
                })  

            }

        </>

    )
}