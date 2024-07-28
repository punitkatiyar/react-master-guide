import React from 'react'

function Login() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-100' alt='side-image' />

                </div>
                <div className='col-6'>
                    {/* login form */}
                    <h1 className='py-4 text-success'>Login User</h1>
                    <div class="form-floating mb-3">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label for="floatingPassword">Password</label>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default Login