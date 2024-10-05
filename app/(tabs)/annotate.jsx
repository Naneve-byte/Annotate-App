import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, PanResponder, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Use expo-image-picker for better compatibility with Expo

const AnnotateApp = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [annotations, setAnnotations] = useState([]);
  const [isAnnotating, setIsAnnotating] = useState(false);
  const [startPosition, setStartPosition] = useState(null);
  const [annotationMode, setAnnotationMode] = useState(false); // Toggle for annotation mode

  // Image container size (Adjustable)
  const imageContainerWidth = Dimensions.get('window').width - 40;
  const imageContainerHeight = 300; // Fixed height for the image container

  // Open image gallery and select an image using expo-image-picker
  const selectImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  // Initialize PanResponder for drawing annotation inside image
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => annotationMode,
    onPanResponderGrant: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      if (annotationMode && locationX <= imageContainerWidth && locationY <= imageContainerHeight) {
        setStartPosition({ x: locationX, y: locationY });
        setIsAnnotating(true);
      }
    },
    onPanResponderMove: () => {
      // Add movement behavior if needed
    },
    onPanResponderRelease: (evt) => {
      if (isAnnotating && startPosition) {
        const { locationX, locationY } = evt.nativeEvent;

        // Ensure that the annotation stays within the image area
        const endX = Math.min(locationX, imageContainerWidth);
        const endY = Math.min(locationY, imageContainerHeight);

        setAnnotations([...annotations, {
          startX: startPosition.x,
          startY: startPosition.y,
          endX: endX,
          endY: endY,
        }]);

        setStartPosition(null);
        setIsAnnotating(false);
        setAnnotationMode(false); // Automatically disable annotation mode after drawing
      }
    },
  });

  return (
    <View style={styles.container}>
      {/* Button to select image from gallery */}
      <Button title="Select Image from Gallery" onPress={selectImageFromGallery} />

      {/* Image container */}
      {selectedImage && (
        <View style={styles.imageContainer} {...panResponder.panHandlers}>
          <Image 
            source={{ uri: selectedImage }} 
            style={styles.image}
            resizeMode="contain"
          />
          {annotations.map((annotation, index) => (
            <View
              key={index}
              style={[
                styles.annotationBox,
                {
                  left: annotation.startX,
                  top: annotation.startY,
                  width: annotation.endX - annotation.startX,
                  height: annotation.endY - annotation.startY,
                },
              ]}
            />
          ))}
        </View>
      )}

      {/* Toolbar to toggle annotation mode */}
      <View style={styles.toolbar}>
        <TouchableOpacity
          style={[styles.annotationButton, annotationMode ? styles.annotationButtonActive : styles.annotationButtonInactive]}
          onPress={() => setAnnotationMode(!annotationMode)}
        >
          <Text style={styles.toolbarText}>Annotate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
    width: Dimensions.get('window').width - 40, // Adjust width to be responsive
    height: 300,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  annotationBox: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
  },
  toolbar: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  annotationButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  annotationButtonActive: {
    backgroundColor: 'green',
  },
  annotationButtonInactive: {
    backgroundColor: 'gray',
  },
  toolbarText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AnnotateApp;
