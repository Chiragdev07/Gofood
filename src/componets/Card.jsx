import React from 'react'

export const Card = () => {
    return (
        <div>
            <div className="card mt-3 rounded" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img className="card-img-top" src="https://t4.ftcdn.net/jpg/04/75/65/21/360_F_475652107_Sx73qgHWljGylX5KRyDFeE46ftX0A4EE.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is Some important Tag</p>
                    <div className="container w-100">
                        <select name="" id="" className='m-2 h-100  bg-success rounded'>

                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option value={i + 1} key={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select name="" id="" className='m-2 h-100  bg-success rounded'>
                            <option value="Half">Half</option>
                            <option value="Full">Full</option>

                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
