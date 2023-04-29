import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center">Terms and conditions</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              eos et aspernatur quam omnis optio a porro, soluta dicta rem quia.
              Laborum, repellat. Dolore eos facilis sequi magni recusandae hic.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              eos et aspernatur quam omnis optio a porro, soluta dicta rem quia.
              Laborum, repellat. Dolore eos facilis sequi magni recusandae hic.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              eos et aspernatur quam omnis optio a porro, soluta dicta rem quia.
              Laborum, repellat. Dolore eos facilis sequi magni recusandae hic.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              eos et aspernatur quam omnis optio a porro, soluta dicta rem quia.
              Laborum, repellat. Dolore eos facilis sequi magni recusandae hic.
            </p>
            <p>
              Go to <Link to={"/register"}>Registration</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
