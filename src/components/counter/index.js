import {
  increment,
  decrement,
  incrementByAmout,
} from "../../store/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch(increment());
  };
  const handleClickdecrement = () => {
    dispatch(decrement());
  };
  const handleincrementByAmount = () => {
    dispatch(incrementByAmout(5));
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            handleClickIncrement();
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            handleClickdecrement();
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            handleincrementByAmount();
          }}
        >
          imcrement +5
        </button>
        <span>{count}</span>
      </div>
    </div>
  );
}
