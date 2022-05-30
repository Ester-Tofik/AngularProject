using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerForEndProject.Models
{
    public class Volunteer
    {
        public string name { get; set; }

        public bool[] days { get; set; }

        public int id { get; set; }


        public Volunteer() { }
        
    }
}
