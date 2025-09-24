$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(1100, 550, 100, 50, "orange");
    createPlatform(200, 350, 100, 50, "red");
    createPlatform(245, 320, 10, 10, "lime");
    createPlatform(200, 655, 100, 45, "Black");
    createPlatform(300, 600, 100, 45, "Black");
    createPlatform(200, 400, 100, 50, "Black");
    createPlatform(300, 400, 100, 50, "Black");
    createPlatform(600, 400, 100, 50, "Black");
    createPlatform(400, 400, 100, 50, "Black");
    createPlatform(700, 400, 100, 50, "Black");
    createPlatform(400, 600, 100, 45, "Black");
    createPlatform(100, 400, 100, 50, "Black");
    createPlatform(600, 600, 100, 50, "Black");
    createPlatform(0, 600, 100, 50, "Black");
    createPlatform(100, 600, 100, 50, "Black");
    createPlatform(800, 400, 100, 50, "Black");
    createPlatform(900, 450, 100, 50, "Black");
    createPlatform(100, 300, 20, 50, "Black");
    createPlatform(100, 350, 20, 50, "Black");
    createPlatform(100, 250, 20, 50, "Black");
    createPlatform(100, 200, 20, 50, "Black");
    createPlatform(100, 150, 20, 50, "Black");
    createPlatform(100, 100, 20, 50, "Black");
    createPlatform(100, 0, 20, 50, "Black");
    createPlatform(100, 50, 20, 50, "Black");
    createPlatform(1000, 600, 100, 30, "Black");
    createPlatform(500, 400, 100, 50, "Black");
    // TODO 3 - Create Collectables
    createCollectable("gem", 230, 559);
    createCollectable("gem", 430, 559);
    createCollectable("gem", 350, 350);
    createCollectable("gem", 600, 550);
    // TODO 4 - Create Cannons
    createCannon("bottom", 500, 700);
    createCannon("right", 200, 500);
    createCannon("right", 750, 1000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
