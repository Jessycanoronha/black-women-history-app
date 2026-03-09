import { render, screen } from "@testing-library/react"
import WomanCard from "./WomanCard"
import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum({
  sentencesPerParagraph: { max: 1, min: 1 },
  wordsPerSentence: { max: 4, min: 2 },
})
const womanMock = {
  id: "1",
  order: 1,
  slug: "ada-lovelace",
  title: "Ada Lovelace",
  description: lorem.generateWords(6),
  metadata: { image: { url: "/images/ada.png" } },
}

describe("WomanCard", () => {
  it("renders card with title", () => {
    render(<WomanCard woman={womanMock} />)
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
  })

  it("renders a card with image", () => {
    render(<WomanCard woman={womanMock} />)
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", "/images/ada.png")
  })
})
