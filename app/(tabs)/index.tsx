import { Image, StyleSheet, Platform, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [curiosityPoints, setCuriosityPoints] = useState(0);
  const [recycleBinCooldown, setRecycleBinCooldown] = useState(false);

  const handleElementClick = (points) => {
    setCuriosityPoints(curiosityPoints + points);
  };

  const handleRecycleBinClick = () => {
    if (!recycleBinCooldown) {
      setCuriosityPoints(curiosityPoints + 1);
      setRecycleBinCooldown(true);
      setTimeout(() => setRecycleBinCooldown(false), 5000);
    }
  };

  return (
    <ScrollView>
      <ThemedView style={styles.illustrationContainer}>
        <Image source={require('@/assets/images/level1.png')} style={styles.illustration} />
      </ThemedView>
      <ThemedView style={styles.elementsContainer}>
        <TouchableOpacity onPress={() => handleElementClick(1)}>
          <Text>Desktop - 1 Curiosity Point</Text>
        </TouchableOpacity>
        {curiosityPoints >= 16 && (
          <TouchableOpacity onPress={() => handleElementClick(2)}>
            <Text>Write - 2 Curiosity Points</Text>
          </TouchableOpacity>
        )}
        {curiosityPoints >= 30 && (
          <TouchableOpacity onPress={() => handleElementClick(3)}>
            <Text>Calculator - 3 Curiosity Points</Text>
          </TouchableOpacity>
        )}
        {curiosityPoints >= 50 && (
          <TouchableOpacity onPress={() => handleElementClick(5)}>
            <Text>System Settings - 5 Curiosity Points</Text>
          </TouchableOpacity>
        )}
        {curiosityPoints >= 80 && (
          <TouchableOpacity onPress={() => handleElementClick(8)}>
            <Text>GW Basic - 8 Curiosity Points</Text>
          </TouchableOpacity>
        )}
        {curiosityPoints >= 120 && (
          <TouchableOpacity onPress={() => handleElementClick(10)}>
            <Text>Turbo Pascal - 10 Curiosity Points</Text>
          </TouchableOpacity>
        )}
        {curiosityPoints >= 40 && (
          <TouchableOpacity onPress={() => handleElementClick(2)}>
            <Text>Paint - 2 Curiosity Points</Text>
          </TouchableOpacity>
        )}
        {curiosityPoints >= 60 && (
          <TouchableOpacity onPress={() => handleElementClick(4)}>
            <Text>Notepad - 4 Curiosity Points</Text>
          </TouchableOpacity>
        )}
        {curiosityPoints >= 100 && (
          <TouchableOpacity onPress={() => handleElementClick(6)}>
            <Text>Games Folder - 6 Curiosity Points</Text>
          </TouchableOpacity>
        )}
        {curiosityPoints >= 150 && (
          <TouchableOpacity onPress={() => handleElementClick(12)}>
            <Text>Internet Explorer - 12 Curiosity Points</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleRecycleBinClick} disabled={recycleBinCooldown}>
          <Text>Recycle Bin - 1 Curiosity Point {recycleBinCooldown && '(Cooldown)'}</Text>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  illustrationContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  illustration: {
    width: 200,
    height: 200,
  },
  elementsContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
