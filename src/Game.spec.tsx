import { fireEvent, render } from "@testing-library/react";

import Game from "./Game";

it("renders game headings", () => {
  const { getByText } = render(<Game />);
  getByText("TIC-TAC-LIVEN");
});

it("renders board and check for step counter update", () => {
  const { getByText, getByTestId } = render(<Game />);

  // Expect "Current step: 0" to be found
  getByText("Current step: 0");

  const square0 = getByTestId(`square-0`);
  fireEvent.click(square0);

  // Expect "Current step: 1" to be found
  getByText("Current step: 1");
});

let square: any = []
it("expect X to be winner", () => {
  const { getByText, getByTestId } = render(<Game />);
  
  const clicks = [0,3,1,4,2]
  for (const i of clicks){
    square[i] = getByTestId(`square-${i}`);
    fireEvent.click(square[i]);    
  }
   
  expect(square[0].innerHTML).toBe("❌")
  expect(square[1].innerHTML).toBe("❌")
  expect(square[2].innerHTML).toBe("❌")
  expect(square[3].innerHTML).toBe("⭕")
  expect(square[4].innerHTML).toBe("⭕")

  getByText("Winner: ❌");
});

it("expect O to be winner", () => {
  const { getByText, getByTestId } = render(<Game />);
  
  const clicks = [0,3,1,4,7,5]
  for (const i of clicks){
    square[i] = getByTestId(`square-${i}`);
    fireEvent.click(square[i]);    
  }
   
  expect(square[0].innerHTML).toBe("❌")
  expect(square[1].innerHTML).toBe("❌")
  expect(square[7].innerHTML).toBe("❌")
  expect(square[3].innerHTML).toBe("⭕")
  expect(square[4].innerHTML).toBe("⭕")
  expect(square[5].innerHTML).toBe("⭕")

  getByText("Winner: ⭕");
});

it("expect to be a draw", () => {
  const { getByText, getByTestId } = render(<Game />);
  
  const clicks = [0,1,4,3,7,6,5,8,2]
  for (const i of clicks){
    square[i] = getByTestId(`square-${i}`);
    fireEvent.click(square[i]);    
  }
   
  getByText("Draw: Game over");
});