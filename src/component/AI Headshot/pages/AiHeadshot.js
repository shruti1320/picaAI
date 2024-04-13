import React from "react";
import { AiHeadshotGeneration } from "../components/AiHeadshotGeneration";
import { AiHeadshotProcess } from "../components/AiHeadshotProcess";
import { AiHeadshotDescription } from "../components/AiHeadshotDescription";
import { AiHeadshotTransformation } from "../components/AiHeadshotTransformation";
import { AiHeadshotStandout } from "../components/AiHeadshotStandout";
import { AiFaq } from "../components/AiFaq";
import { AiHeadshotPackages } from "../components/AiHeadshotPackages";

export default function AiHeadshot() {
  return (
    <div>
      <AiHeadshotGeneration />
      <AiHeadshotProcess />
      <AiHeadshotDescription />
      <AiHeadshotTransformation />
      <AiHeadshotPackages />
      <AiFaq/>
      <AiHeadshotStandout />
    </div>
  );
}
