using Microsoft.AspNetCore.Mvc;
using ServerForEndProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ServerForEndProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VolunteerController : ControllerBase
    {
        public static List<Volunteer> volunteers = new List<Volunteer>() {
            new Volunteer{  name = "Yair" , days = new bool[] {true,false,false,true,false,false } , id=1},
            new Volunteer{  name = "Michael",   days = new bool[] {true,false,false,true,false,false } , id=2},
            new Volunteer{  name = "Elchanan",  days = new bool[] {false,false,false,true,true,false } , id=3},
            new Volunteer{  name = "Yedidya",   days = new bool[] {true,false,true,true,false,false } , id=4},
            new Volunteer{  name = "Chagay",    days = new bool[] {true,true,true,true,false,false } , id=5},
            new Volunteer{  name = "Netanel",   days = new bool[] {false,false,false,false,false,true } , id=6},
        };


        // GET: api/<VolunteerController>
        [HttpGet]
        public List<Volunteer> Get()
        {
            return volunteers;
        }
        [HttpGet("{id}")]
        public Volunteer Get(int id)
        {
            for (int i = 0; i < volunteers.Count; i++)
            {
                if (volunteers[i].id == id)
                    return volunteers[i];
            }
            return null;
        }

        //[HttpGet("{day}")]
        //public Volunteer Get2(int day)
        //{
        //    for (int i = 0; i < volunteers.Count; i++)
        //    {
        //        if (volunteers[i].id == id)
        //            return volunteers[i];
        //    }
        //    return null;
        //}

        //// POST api/<VolunteerController>
        [HttpPut]
        //[Route("Post")]
        public bool Put(Volunteer v)
        {
            for (int i = 0; i < volunteers.Count; i++)
            {
                if (volunteers[i].id == v.id)
                {
                    volunteers[i] = v;
                    return true;
                }
            }
            return false;
        }



        // PUT api/<VolunteerController>/5
        //[HttpPut("{id}")]
        //public bool Put(volunteer v)
        //{

        //}

        //// DELETE api/<VolunteerController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
    }
    }

