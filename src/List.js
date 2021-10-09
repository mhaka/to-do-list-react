import React from "react";

const List = ({ list, onToggle }) => {
  return (
    <>
      {list.map((item) => {
        const { id, description, image, done } = item;
        return (
          <article key={id} className="item">
            <img
              src={
                done
                  ? "https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__480.png"
                  : image
              }
              alt={description}
            />
            <div>
              <h4
                onDoubleClick={() => onToggle(item.id)}
                className={done ? "marked" : ""}
              >
                {description}
              </h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
