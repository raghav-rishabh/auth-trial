// import { createClient } from 'https://esm.sh/@supabase/supabase-js'

// const supabase = createClient(
//   'https://zjgwnctxwtecgjwppnyy.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZ3duY3R4d3RlY2dqd3Bwbnl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwMTQyMzksImV4cCI6MjA5NDU5MDIzOX0.L9YxbFpAQKnLvCHg6UoD7SdVpcElCfSSFwWdHhqb3wo'
// )


// // ================= LOGIN =================

// const loginBtn = document.querySelector('.card button')

// if(loginBtn){

//   loginBtn.addEventListener('click', async ()=>{

//     const email = document.querySelector('input[type="email"]').value
//     const password = document.querySelector('input[type="password"]').value

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password
//     })

//     if(error){
//       alert(error.message)
//     }else{
//       window.location.href = '/project/dashboard'
//     }

//   })

// }



// // ================= SIGNUP =================

// const signupBtn = document.querySelector('.form-side button')

// if(signupBtn){

//   signupBtn.addEventListener('click', async ()=>{

//     const email = document.querySelector('input[type="email"]').value
//     const password = document.querySelector('input[type="password"]').value

//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password
//     })

//     if(error){
//       alert(error.message)
//     }else{
//       alert('Account created successfully!')
//       window.location.href = '/project/login'
//     }

//   })

// }



// // ================= DASHBOARD =================

// const profileName = document.querySelector('.profile strong')

// if(profileName){

//   const { data, error } = await supabase.auth.getUser()

//   if(data.user){
//     profileName.innerText = data.user.email
//   }else{
//     window.location.href = '/project/login/'
//   }

// }

// const logoutBtn = document.querySelector('.logout-button')

// if(logoutBtn){

//   logoutBtn.addEventListener('click', async ()=>{

//     const { error } = await supabase.auth.signOut()

//     if(error){
//       alert(error.message)
//     }else{
//       window.location.href = '/project/login/'
//     }

//   })

// }





import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
  'https://zjgwnctxwtecgjwppnyy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZ3duY3R4d3RlY2dqd3Bwbnl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwMTQyMzksImV4cCI6MjA5NDU5MDIzOX0.L9YxbFpAQKnLvCHg6UoD7SdVpcElCfSSFwWdHhqb3wo'
)


// LOGIN

const loginBtn = document.querySelector('.card button')

if (loginBtn) {

  loginBtn.addEventListener('click', async () => {

    const email = document.querySelector('input[type="email"]').value
    const password = document.querySelector('input[type="password"]').value

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert(error.message)
    } else {
      window.location.href = '../dashboard/index.html'
    }

  })

}


// SIGNUP

const signupBtn = document.querySelector('.form-side button')

if (signupBtn) {

  signupBtn.addEventListener('click', async () => {

    const email = document.querySelector('input[type="email"]').value
    const password = document.querySelector('input[type="password"]').value

    const { error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      alert(error.message)
    } else {
      alert('Account created successfully!')
      window.location.href = '../login/index.html'
    }

  })

}


// DASHBOARD

const profileName = document.querySelector('.profile strong')

if (profileName) {

  const { data } = await supabase.auth.getUser()

  if (data.user) {
    profileName.innerText = data.user.email
  } else {
    window.location.href = '../login/index.html'
  }

}


// LOGOUT

const logoutBtn = document.querySelector('.logout-button')

if (logoutBtn) {

  logoutBtn.addEventListener('click', async () => {

    await supabase.auth.signOut()

    window.location.href = '../login/index.html'

  })

}