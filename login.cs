string firstname = "select FirstName from RegistrationData where UserName='" + userin.Text + "'";
            string lastname = "select LastName from RegistrationData where UserName='" + userin.Text + "'";
            string email = "select Email from RegistrationData where UserName='" + userin.Text + "'";
            string username = "select UserName from RegistrationData where UserName='" + userin.Text + "'";
            string userid = "select Id from RegistrationData where UserName='" + userin.Text + "'";
           
            SqlCommand FirstName = new SqlCommand(firstname, conn);
            SqlCommand UserId = new SqlCommand(userid, conn);
            SqlCommand LastName = new SqlCommand(lastname, conn);
            SqlCommand Email = new SqlCommand(email, conn);
            SqlCommand UserName = new SqlCommand(username, conn);
           
            string fname = FirstName.ExecuteScalar().ToString().Replace(" ", "");
            string uid = UserId.ExecuteScalar().ToString().Replace(" ", "");
            string lname = LastName.ExecuteScalar().ToString().Replace(" ", "");
            string mail = Email.ExecuteScalar().ToString().Replace(" ", "");
            string uname = UserName.ExecuteScalar().ToString().Replace(" ", "");
                Session["new"] = fname;
                Session["id"] = uid;
                Session["last"] = lname;
                Session["user"] = uname;
                Session["email"] = mail;
                string checkuser2 = "select count(*) from ProfileS where Id = '" + uid + "'";
                SqlCommand com2 = new SqlCommand(checkuser2, conn);
                int temp2 = Convert.ToInt32(com2.ExecuteScalar().ToString());
               
                Response.Write("Password is correct");
               
        
       
       
            if(temp2==1)
                {
                    string userid2 = "select Id from RegistrationData where UserName='" + userin.Text + "'";
                    SqlCommand UserId2 = new SqlCommand(userid2, conn);
                    string uid2 = UserId2.ExecuteScalar().ToString().Replace(" ", "");
                    
                    string address = "select Address from ProfileS where Id ='" + uid2 + "'";
                    string address2 = "select Address2 from ProfileS where Id ='" + uid2 + "'";
                    string city = "select City from ProfileS where Id ='" + uid2 + "'";
                    string state = "select State from ProfileS where Id ='" + uid2 + "'";
                    string occupation = "select Occupation from ProfileS where Id ='" + uid2 + "'";
                    string employer = "select Employer from ProfileS where Id ='" + uid2 + "'";
                    string years = "select YOJ from ProfileS where Id ='" + uid2 + "'";
                    string income = "select Income from ProfileS where Id ='" + uid2 + "'";
                    string zipcode = "select ZipCode from ProfileS where Id ='" + uid2 + "'";
                    SqlCommand Address = new SqlCommand(address, conn);
                    SqlCommand Address2 = new SqlCommand(address2, conn);
                    SqlCommand City = new SqlCommand(city, conn);
                    SqlCommand State = new SqlCommand(state, conn);
                    SqlCommand Occupation = new SqlCommand(occupation, conn);
                    SqlCommand Employer = new SqlCommand(employer, conn);
                    SqlCommand Years = new SqlCommand(years, conn);
                    SqlCommand Income = new SqlCommand(income, conn);
                    SqlCommand Zipcode = new SqlCommand(zipcode, conn);
                    string ad = Address.ExecuteScalar().ToString();
                    string ad2 = Address2.ExecuteScalar().ToString();
                    string city1 = City.ExecuteScalar().ToString();
                    string state1 = State.ExecuteScalar().ToString();
                    string occu = Occupation.ExecuteScalar().ToString();
                    string emp = Employer.ExecuteScalar().ToString();
                    string yrs = Years.ExecuteScalar().ToString();
                    string inc = Income.ExecuteScalar().ToString();
                    string zip = Zipcode.ExecuteScalar().ToString();
                    Session["address"] = ad;
                    Session["address2"] = ad2;
                    Session["city"] = city1;
                    Session["state"] = state1;
                    Session["occu"] = occu;
                    Session["emp"] = emp;
                    Session["yrs"] = yrs;
                    Session["inc"] = inc;
                    Session["user"] = uname;
                    Session["zip"] = zip;
                }
            else
            {
                Session["address"] = null;
                Session["address2"] = null;
                Session["city"] = null;
                Session["state"] = null;
                Session["occu"] = null;
                Session["emp"] = null;
                Session["yrs"] = null;
                Session["inc"] = null;
                Session["user"] = null;
                Session["zip"] = null;
            }
                conn.Close();
           
                Response.Redirect("manager.aspx");
            }
            }
        
            else
            {
                Response.Write("Password is not correct");
            }

        
        


    }
    