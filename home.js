let computerScore = 0;
let humanScore = 0;
let textResult;
const ResultLiterals = {
	WIN: "You Win!",
	LOST: "You Lost!",
	TIE: "Tie",
};

function isWinner(humanChoice, botChoice) {
	if (humanChoice.id == botChoice.id) {
		textResult = "Tie!!";
	} else {
		switch (humanChoice.id) {
			case "rock":
				textResult =
					botChoice.id === "paper" ? ResultLiterals.LOST : ResultLiterals.WIN;
				break;
			case "paper":
				textResult =
					botChoice.id === "rock" ? ResultLiterals.WIN : ResultLiterals.LOST;
				break;
			case "scissors":
				textResult =
					botChoice.id === "paper" ? ResultLiterals.WIN : ResultLiterals.LOST;
				break;
		}
		switch (textResult) {
			case ResultLiterals.WIN:
				humanScore++;
				break;
			case ResultLiterals.LOST:
				computerScore++;
				break;
			default:
				break;
		}
	}

	document.getElementById("human-score").textContent = humanScore;
	document.getElementById("computer-score").textContent = computerScore;
	document.getElementById("text").textContent = textResult;
	if (textResult == "You Win!") {
		document.getElementById("text").style.color = "#18be50";
		return ["win", "lost"];
	} else if (textResult == "Tie!!") {
		document.getElementById("text").style.color = "orange";
		return ["", ""];
	} else {
		document.getElementById("text").style.color = "crimson";
		return ["lost", "win"];
	}
}

function CloneNode(element) {
	let ClonedElement = element.entity.cloneNode(false);
	console.log(element.Class);
	if (element.Class !== "") {
		ClonedElement.classList.add(element.Class);
	}
	ClonedElement.onclick = () => {};
	return ClonedElement;
}

function AddAndReplaceChoices(human, bot) {
	// Human Choice
	const HumanSelectionNode = document.getElementById("previousSelectionHuman");
	if (HumanSelectionNode.children.length === 0) {
		HumanSelectionNode.appendChild(CloneNode(human));
	} else {
		HumanSelectionNode.replaceChild(
			CloneNode(human),
			HumanSelectionNode.childNodes[0]
		);
	}
	// Bot Choice
	const BotSelectionNode = document.getElementById("previousSelectionBot");

	if (BotSelectionNode.children.length === 0) {
		BotSelectionNode.appendChild(CloneNode(bot));
	} else {
		BotSelectionNode.replaceChild(
			CloneNode(bot),
			BotSelectionNode.childNodes[0]
		);
	}
}

function game(yourChoice) {
	let humanChoice = yourChoice;
	let choices = [
		document.getElementById("paper"),
		document.getElementById("rock"),
		document.getElementById("scissors"),
	];
	let botChoice = choices[Math.floor(Math.random() * choices.length)];
	const [HumanClass, BotClass] = isWinner(humanChoice, botChoice);
	AddAndReplaceChoices(
		{ entity: humanChoice, Class: HumanClass },
		{
			entity: botChoice,
			Class: BotClass,
		}
	);
}
