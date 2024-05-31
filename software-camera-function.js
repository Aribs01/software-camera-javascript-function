

// INPUT
// range of subject
// light level
// list of cameras and properties

// OUTPUT
// boolean - if the sets of cameras will suffice

function testHardwareCamera(ranges, lightLevels, cameras) {
  //
  const cameraRangeArr = cameras.map(camera => camera.subjectRange);
  const cameraLightLevelArr = cameras.map(camera => camera.lightLevel);

  const cameraRangeSet = new Set(cameraRangeArr);
  const cameraLightLevelSet = new Set(cameraLightLevelArr);

  if (ranges.every(range => cameraRangeSet.has(range)) && lightLevels.every(level => cameraLightLevelSet.has(level))) {
    console.log(true);
  } else {
    console.log(false);
  }
}

const subjectRanges = [
  50, 100
]

const subjectLightLevels = [
  500, 1000, 2000
]

const hardwareCameras = [
  { id: 1, subjectRange: 50, lightLevel: 500 },
  { id: 2, subjectRange: 100, lightLevel: 1000 },
  { id: 2, subjectRange: 100, lightLevel: 2000 }
];

testHardwareCamera(subjectRanges, subjectLightLevels, hardwareCameras);
