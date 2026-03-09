import { Woman } from "../types/woman";

export default function getWomanImage(woman: Woman) {
  return woman.metadata?.image?.url ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      woman.title ?? "Woman"
    )}&background=6A1B9A&color=fff`
}
