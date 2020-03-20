<!doctype html>
    <html lang="en">
      <head>
        <title>Dashboard</title>

    <!-- Required meta tags -->
    <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

      <script>
          function toggleSidebar(){
              document.getElementsByClassName("sidebar");
          }
      </script>


      <style type="text/css">

          .toggle-btn {
              position:absolute;
              left:180px;
              top:70px
          }

          .toggle-btn span {
              display:block;
              width:30px;
              height:5px;
              background:#000000;
              margin: 5px 0px;
          }

          .sidebar {
              height:100%;
              width:160px;
              position: fixed;
              z-index:1;
              top:0;
              let:0;
              background-color:#111;
              overflow-x: hidden;
              padding-top:70px;                                                  
          }

          .sidebar.active {
              left:0px
          }

          .sidebar a {
              padding:6px 8px 6px 16px;
              text-decoration: none;
              font-size:18px;
              color: #818181;
              display:block;

          }

           .sidebar a:hover {
               color:#ffffff;

          }

      </style>

  </head>


  <body>

<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

      <div class="toggle-btn">
          <span></span>
          <span></span>
          <span></span>
      </div>

      <div class="sidebar">


          <a href="/categories">Categories</a>
          <a href="#">Test 1</a>
          <a href="#">Test 2</a>
          <a href="#">Test 3</a>
          <a href="#">Test 4</a>

      </div>


  </body>


<header class="site-header">

  <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
    <div class="container">


      <a class="navbar-brand mr-4" href="#">Home.com</a>


      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggle">
        <div class="navbar-nav mr-auto">
        </div>
        <!-- Navbar Right Side -->
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#">Logout</a>
        </div>
      </div>
    </div>
  </nav>

<section class="hero">
            <div class="hero-inner">
                <h1>Centered Text</h1>

            </div>
        </section>



</header>

</body>    
</html>
