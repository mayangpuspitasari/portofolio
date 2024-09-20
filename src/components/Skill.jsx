const Skill = () => {
  return (
    <div
      className="skill flex flex-wrap bg-[url('src/asset/night6.jpg')] bg-cover bg-center"
      id="skill"
    >
      <div className="w-full max-w-lg ">
        <h1 className="text-white font-bold relative">HTML</h1>
        <div className="w-full bg-gray-300 rounded-full h-6 mb-4">
          <div
            className="bg-blue-500 h-6 rounded-full"
            style={{ width: '90%' }}
          ></div>
        </div>

        <h3 className="text-white font-bold relative">CSS</h3>
        <div className="w-full bg-gray-300 rounded-full h-6 mb-4">
          <div
            className="bg-green-500 h-6 rounded-full"
            style={{ width: '85%' }}
          ></div>
        </div>

        <h3 className="text-white font-bold relative">React</h3>
        <div className="w-full bg-gray-300 rounded-full h-6 mb-4">
          <div
            className="bg-blue-700 h-6 rounded-full"
            style={{ width: '75%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

