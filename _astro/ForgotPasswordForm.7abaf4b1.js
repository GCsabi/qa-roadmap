import{h as t}from"./hooks.module.a845df0c.js";import{h as d}from"./http.20668c64.js";import{o as e}from"./jsxRuntime.module.8b00cb04.js";import"./preact.module.f1575aff.js";import"./jwt.f0e0aa9c.js";function x(){const[o,s]=t(""),[n,a]=t(!1),[i,l]=t(""),[u,c]=t("");return e("form",{onSubmit:async r=>{r.preventDefault(),a(!0),l("");const{response:f,error:m}=await d("https://api.roadmap.sh/v1-forgot-password",{email:o});a(!1),m?l(m.message):(s(""),c("Check your email for a link to reset your password."))},class:"w-full",children:[e("input",{type:"email",name:"email",className:"mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,placeholder:"Email Address",value:o,onInput:r=>s(r.target.value)}),i&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-sm text-red-700",children:i}),u&&e("p",{className:"mt-2 rounded-lg bg-green-100 p-2 text-sm text-green-700",children:u}),e("button",{type:"submit",disabled:n,className:"mt-3 inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",children:n?"Please wait...":"Continue"})]})}export{x as ForgotPasswordForm};
