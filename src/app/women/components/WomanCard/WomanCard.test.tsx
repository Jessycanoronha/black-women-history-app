import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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

  it("renders fallback avatar when no image url", () => {
    const womanWithoutImage = { ...womanMock, metadata: { image: { url: undefined } } }
    render(<WomanCard woman={womanWithoutImage} />)
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute(
      "src",
      expect.stringContaining("https://ui-avatars.com/api/?name=")
    )
  })

  it("button is clickable", async () => {
    render(<WomanCard woman={womanMock} />)
    const button = screen.getByRole("button", { name: /ver detalhes de ada lovelace/i })
    await userEvent.click(button)
  })
})
