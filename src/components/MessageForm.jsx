
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleMessage = async (e) => {

        //It Is Used To Override the Browsers Default Behaviour To Reload The Application After Form Submit. Using This
        //We are not reloading the Browser After Form Submit.

        e.preventDefault();
        try {
            setIsLoading(true);
            await axios
                .post(
                    "http://127.0.0.1:4000/api/v1/message/sendMessage",
                    { firstName, lastName, email, phone, message },
                    {
                        withCredentials: true,
                        headers: { "Content-Type": "application/json" },
                    }
                )
                .then((res) => {
                    console.log("=========================================");
                    console.log(res.data);
                    console.log("=========================================");
                    toast.success(res.data.message);
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                    setIsLoading(false);
                });
        } catch (error) {
            console.log("=========================================");
            console.log(error.response.data);
            console.log("=========================================");
            toast.error(error.response.data.message);
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading === true ? (<div className=".loading" ></div>) : (<div className="container form-component message-form">
                <h2>Send Us A Message</h2>
                <form onSubmit={handleMessage}>
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <textarea
                        rows={7}
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div style={{ justifyContent: "center", alignItems: "center" }}>
                        <button type="submit">Send</button>
                    </div>
                </form>
                <img src="/Vector.png" alt="vector" />
            </div>)}
        </>
    );
};

export default MessageForm;
