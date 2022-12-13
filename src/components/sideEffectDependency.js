import React, { useEffect, useState } from "react";
const SideEffectDependency = ()=> {
    const [entered, setEntered] = useState("")
    const [errors, setErrors] = useState({})


function validator(){
    // console.log(str)
     let regForNumOrAlpha=/^([\w\s]+)$/ //special characters not allowed
            let regForNumeric=/\d/
            let regForAlpha=/[A-Za-z]/
            let res1=regForNumOrAlpha.test(entered)
            let res2=regForNumeric.test(entered)
            let res3=regForAlpha.test(entered)
            console.log(res1 , res2 , res3)
            if(res1 ==false || res2 ==false ||res3 ==false){
                errors.name="invalid name not alphanumeric"

            } else{
                errors.name=""


            }
   }

   useEffect(validator,[entered])
       


    return (
        <div> 
         <label htmlFor="name">Name</label>
       
            <input id="name" onChange={(event)=> {
                 // validator(event.target.value )
                setEntered(event.target.value)
                
            }

            }/>
            {errors.name && <p>{errors.name} </p>}
        </div>
    )
}
export default SideEffectDependency;


























// const SideEffectDependency = ()=> {
//     const [countryInfo, setCountryInfo] = useState({});
//     const [zipcode, setZipCode] = useState({zip: ""})

//     useEffect(()=> {
//         console.log(zipcode)
//         fetch(`https://api.zippopotam.us/us/${zipcode.zip}`).then((res)=> {
//             return res.json();
//         }).then((country)=> {
//             setCountryInfo(country)
//         }).catch((error)=> {
//             console.log(error)
//         })
//     },[zipcode.zip])
//     return (
//         <div>
//             <input onChange={(event)=> {setZipCode({...zipcode,zip:event.target.value})}}/>
//             <div>{countryInfo.country}</div>
//             <div>{countryInfo?.places?.[0]["place name"]}</div>
//             <div>{countryInfo?.places?.[0]["state"]}</div>
//         </div>
//     )
// }
// export default SideEffectDependency;


