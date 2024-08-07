<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drone and Geodetic Surveying Services</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: white;
            padding: 1em 0;
            text-align: center;
            position: relative;
        }
        nav {
            position: absolute;
            top: 0;
            right: 0;
            padding: 1em;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 0.5em;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
            padding: 2em 0;
            text-align: center;
        }
        .choice {
            display: inline-block;
            width: 45%;
            margin: 2em 2%;
            padding: 2em;
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.2s;
        }
        .choice:hover {
            transform: scale(1.05);
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
        @media (max-width: 768px) {
            .choice {
                width: 90%;
                margin: 1em 0;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to Drone and Geodetic Surveying Services</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="droneService.html">Drone Service</a>
            <a href="geodeticSurveying.html">Geodetic Surveying</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>
    <div class="container">
        <div class="choice" onclick="location.href='droneService.html'">
            <h2>Drone Service</h2>
            <p>Click here to view and pin drone pilot profiles</p>
        </div>
        <div class="choice" onclick="location.href='geodeticSurveying.html'">
            <h2>Geodetic Surveying</h2>
            <p>Click here to view and pin geodetician profiles</p>
        </div>
    </div>
    <footer>
        <p>&copy; 2024 Drone and Geodetic Surveying Services</p>
    </footer>
</body>
</html>
