    <div className="shape"></div>
      <br />
      <div className="shape2"></div> 

      .shape {
        border: 3px solid blue;
        border-bottom: 100px solid red;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        height: 0;
        width: 100px;
        /* transform: rotate(90deg); */
      }
      
      /* 사다리꼴 */
      .shape2 {
        border: 3px solid blue;
        border-left: 250px solid blue;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
        height: 100px;
        /* width: 100px; */
        margin: 30px;
        /* transform: rotate(90deg); */
      }
      