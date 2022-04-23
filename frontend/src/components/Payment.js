import React from 'react';

const Payment = () => {
  return (
    <div className="payment">
        <form>
            <table>
                <tr>
                    <td>Name:</td>
                    <td><input type="text" id="fname" name="fname" /></td>
                </tr>
                <tr>
                    <td>Phone Number:</td>
                    <td><input type="tel" id="phone" name="phone" /></td>
                </tr>
                <tr>
                    <td>Amount:</td>
                    <td><input type="text" id="amount" name="amount"/></td>
                </tr>
            </table>
            <input type="submit" value="submit" className="submitButton"/>
        </form>

    </div>
  )
}

export default Payment;