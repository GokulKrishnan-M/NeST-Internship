import { Component } from '@angular/core';
import { Card } from "../../common/card/card";

@Component({
  selector: 'app-district',
  imports: [Card],
  templateUrl: './district.html',
  styleUrl: './district.css'
})
export class District {
  districts = [
  {
    "id": 1,
    "title": "Kottayam",
    "description": "Known for its rubber plantations and literacy rate.",
    "imglink": "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRMz4IvIhyev5IJJxXQH7DPo55sqBiV665kzT-fVbReDOOGnm_9QAW9uZBNoVHgarpy"
  },
  {
    "id": 2,
    "title": "Thiruvananthapuram",
    "description": "The capital city of Kerala, known for its beaches and palaces.",
    "imglink": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Padmanabhaswamy_Temple_Thiruvananthapuram.jpg"
  },
  {
    "id": 3,
    "title": "Kollam",
    "description": "Famous for its backwaters, cashew processing, and Ashtamudi Lake.",
    "imglink": "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQqPuV4SywMehhgMudpnHke6NJeDb1HNWwSYp0wuAflm_Ys1teYa8aBrYkcRof8Vh0c"
  },
  {
    "id": 4,
    "title": "Pathanamthitta",
    "description": "Known as the headquarters of pilgrimage tourism in Kerala.",
    "imglink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pathanamthitta_CentralJn.jpg/1200px-Pathanamthitta_CentralJn.jpg"
  },
  {
    "id": 5,
    "title": "Alappuzha",
    "description": "Venice of the East, famous for backwaters and houseboats.",
    "imglink": "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQPjy4pruptPfaYkjdeA0m3isGTAdX5ocGzGfxZ7aUmEeCCjVaClCKh1QxYhGnSvi2R"
  },
  {
    "id": 6,
    "title": "Idukki",
    "description": "Famous for spice plantations and hill stations like Munnar.",
    "imglink": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/17/28/ed/iduukki-arch-dam.jpg?w=500&h=400&s=1"
  },
  {
    "id": 7,
    "title": "Ernakulam",
    "description": "Commercial capital of Kerala, home to Kochi city.",
    "imglink": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ0uYvNHNrkF4Pkv0zLKOtjHxQWre7uKz5DVxyzwqIRemqxxQ7eCooMkLX18kqu-2nGxDyWedaNcDMApmV3esJqR3SkRznOjrB1ySPyig"
  },
  {
    "id": 8,
    "title": "Thrissur",
    "description": "Cultural capital of Kerala, famous for Thrissur Pooram festival.",
    "imglink": "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRgHJMZb0DsjmHEzmvHnK2oIJ9K-fzP63Cjop1glBzjUSFTkbLC8z6W7D6WEDZzKDpO"
  },
  {
    "id": 9,
    "title": "Palakkad",
    "description": "Known as the Rice Bowl of Kerala and Palakkad Gap.",
    "imglink": "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRPK_kfSHsqQVjY8ZpI4PImQvObRl0l6s5gFsnRSE3FpLl7q4AwiXrgQtBsIBRAAHru"
  },
  {
    "id": 10,
    "title": "Malappuram",
    "description": "Known for its rich cultural heritage and historical significance.",
    "imglink": "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQw7kD4qcls-aVNG8L7hGLf_kKlSDWExsRwhA1pwZuAaoXu9bzTm0pRPUB5hNVYVMtm"
  },
  {
    "id": 11,
    "title": "Kozhikode",
    "description": "Historic port city, famous for spices and Malabar cuisine.",
    "imglink": "https://upload.wikimedia.org/wikipedia/commons/2/28/Kozhikode_city.jpg"
  },
  {
    "id": 12,
    "title": "Wayanad",
    "description": "Hill station known for wildlife sanctuaries and coffee plantations.",
    "imglink": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/1200px-Blue%2C_Green_%26_White.jpg"
  },
  {
    "id": 13,
    "title": "Kannur",
    "description": "Known for its pristine beaches and traditional Theyyam performances.",
    "imglink": "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTGqSXA2T33tNyJG6NPMvZ8glox2YlznfNdc7HStzCMICudYts7pvvL7com4ty344zn"
  },
  {
    "id": 14,
    "title": "Kasaragod",
    "description": "Northernmost district, famous for its forts and beaches.",
    "imglink": "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRitEZv1_xe-72-HuuLWAZ7tEBmcaYhnh8zMF9punN0VwOEqSL5QeH6YKObF8tQiF12"
  }
]

}

