using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerForEndProject.Models
{
    public class Day
    {
        List<Volunteer> l = new List<Volunteer>() { };
        public Day()
        {
            l.Add(new Volunteer());
        }
        public List<Volunteer> GetL()
        {
            return l;
        }
        public void setL(Volunteer v)
        {
            l.Add(v);
        }
    }
}
