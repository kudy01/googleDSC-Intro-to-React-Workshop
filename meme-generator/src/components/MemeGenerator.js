import React, { useState, useEffect } from "react";

const MemeGenerator = () => {
  //State
  // using a combined text property to store top and bottom text
  const [text, setText] = useState({ topText: "", bottomText: "" });
  const [imageList, setImageList] = useState([]);
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setImageList(data.data.memes));
  }, []);

  const handleChange = (event) => {
    /* We are using ...(spread operator) to pass the rest of properties of variable text as is, that means when we are updating topText, bottomText won't be updated and vice-versa.
    Also [event.target.name] is array destructing where, the text would be updated depending on the name of the subfield.
    For more info:- https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react */
    setText({
      ...text,
      [event.target.name]: event.target.value,
    });
  };

  const onButtonSubmit = (event) => {
    event.preventDefault();
    const randIndex = Math.floor(Math.random() * imageList.length);
    setRandomImg(imageList[randIndex].url);
    //console.log(randomImg);
  };

  return (
    <>
      <form className="meme-form">
        <input
          name="topText"
          value={text.topText}
          placeholder="Enter the top text"
          onChange={handleChange}
        />
        <input
          name="bottomText"
          value={text.bottomText}
          placeholder="Enter the bottom text"
          onChange={handleChange}
        />
        <button onClick={onButtonSubmit}>Generate</button>
      </form>
      <div className="meme">
        <img src={randomImg} alt="" />
        <h2 className="top">{text.topText}</h2>
        <h2 className="bottom">{text.bottomText}</h2>
      </div>
    </>
  );
};

export default MemeGenerator;
