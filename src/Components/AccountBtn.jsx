/* eslint-disable react/prop-types */
const AccountBtn = ({ text }) => {
  return (
    <div className="bg-blue-500 py-1 px-2 rounded-md  text-white">
      <h1>{text ? text : "Btn Text"}</h1>
    </div>
  );
};

export default AccountBtn;
