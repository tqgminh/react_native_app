import React from "react";
import {TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack}>
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
}