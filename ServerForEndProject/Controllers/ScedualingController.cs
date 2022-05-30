using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServerForEndProject.Models;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ServerForEndProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScedualingController : ControllerBase
    {
        public List<List<Volunteer>> sch { get; set; }

        public ScedualingController()
        {
            sch = new List<List<Volunteer>>() {
            new List<Volunteer> { },
            new List<Volunteer> { },
            new List<Volunteer> { },
            new List<Volunteer> { },
            new List<Volunteer> { },
            new List<Volunteer> { },
            };
        }

        public static Volunteer[] Scedualing = new Volunteer[6];

        [HttpGet]
        public List<List<Volunteer>> Get()
        {
            for (int i = 0; i < VolunteerController.volunteers.Count; i++)
            {
                for (int j = 0; j < 6; j++)
                {
                    if (VolunteerController.volunteers[i].days[j] == true)
                    {
                        sch[j].Add(VolunteerController.volunteers[i]);
                    }
                }
            }
            return sch;
        }


        [HttpPut]
        public bool Put(string [] names)
        {
            for(int j = 0; j < names.Length; j++)
            {
                if (names[j] == "")
                {
                    if (j >= 5)
                    {
                        return true;
                    }
                    else
                        j++;
                }
                for (int i = 0; i < VolunteerController.volunteers.Count;i++) 
                {
                    if (VolunteerController.volunteers[i].name == names[j])
                    {
                        Scedualing[j] = VolunteerController.volunteers[i];
                    }
                }
            }
            return true;
        }


        //void main()
        //{
        //    GetScedualing(3);
        //}
        [HttpGet("{day}")]
        [Route("Get")]
        public Volunteer[] Get(int day)
        {
            return Scedualing;
            //return Scedualing[day];
        }

        //[HttpPost]
        //public bool Post(string [] names)
        //{
        //    for (int j = 0; j < names.Length; j++)
        //    {
        //        if (names[j] == null)
        //            return false;
        //        for (int i = 0; i < VolunteerController.volunteers.Count; i++)
        //        {
        //            if (VolunteerController.volunteers[i].name == names[j])
        //            {
        //                Scedualing[j] = VolunteerController.volunteers[i];
        //            }
        //        }
        //    }
        //    return true;
        //}

        //// PUT api/<ScedualingController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<ScedualingController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
