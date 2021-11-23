import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  videoList = [
    {
      title:
        'Harrdy Sandhu - Bijlee Bijlee ft Palak Tiwari | Jaani | BPraak | Arvindr Khaira | Desi Melodies',
      category: 'Songs',
      embed: 'NwdQx2P_ytk',
    },
    {
      title:
        'Dumdaar Khiladi New Released Hindi Dubbed Full Movie | Ram Pothineni | Anupama Parameswaran',
      category: 'Movies',
      embed: 'zAVmwt_U4c0',
    },
    {
      title:
        'Technical Skills for IT Project Manager | How to Become an IT PM    ',
      category: 'Technical',
      embed: 'l1zmFfiOgsY',
    },
    {
      title:
        'Waalian : Harnoor (Full Song) Gifty | The Kidd | Rubbal GTR | Latest Punjabi Song | JattLife Studios',
      category: 'Songs',
      embed: 'rCoPr8UwRMc',
    },
     {
      title:
        'Stocks Vs Cryptocurrency | Where to Invest Money for High Profit?',
      category: 'Cryptocurrency',
      embed: 'Q8vlBzO0v4Q',
    },
    {
      title: 'Shawn Mendes - Treat You Better',
      category: 'Songs',
      embed: 'lY2yjAdbvdQ',
    },
    {
      title:
        'What is the reality of Bitcoin? | Best Cryptocurrency? | Investing for Beginners | Ankur Warikoo',
      category: 'Cryptocurrency',
      embed: 'e0frvHLHMGI',
    },
    {
      title:
        'Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo',
      category: 'Songs',
      embed: '3AyMjyHu1bA',
    },
    {
      title:
        'TOP 10 NEW TECHNOLOGY GADGETS अनोखे Inventions जो आपके होश उड़ा दे',
      category: 'Technical',
      embed: 'CNgmxqmoyWE',
    },
    {
      title:
        'How to do Crypto Research? | 5 Best Crypto Research Tools',
      category: 'Cryptocurrency',
      embed: 'DbmX2Vsk7Is',
    },
    {
      title: 'Jasmine Sandlas - Guglu Muglu (Official Video)',
      category: 'Songs',
      embed: 'mOrVJpVPxTs',
    },
    {
      title: 'How to Prepare for Technical Interviews, Part 1 - Coding',
      category: 'Technical',
      embed: '7UlslIXHNsw',
    },
    
    
    {
      title:
        'NIRA ISHQ : GURI (Official Song) Satti Dhillon | GK.DIGITAL | Latest Songs | Geet MP3      ',
      category: 'Songs',
      embed: 'VO7Vu207-e8',
    },
    {
      title:
        'HBest Cryptocurrency Exchange in India 2021 | Best Bitcoin App | Wazirx vs Coinswitch vs Coindcx',
      category: 'Cryptocurrency',
      embed: 'ilXoVXURItE',
    },
    {
      title:
        'Gaal Ni Kadni | Parmish Verma | Desi Crew | Latest Punjabi Songs 2017 | Speed Records      ',
      category: 'Songs',
      embed: 'U65TWIP3mpQ',
    },
    {
      title:
        'What is Dogecoin? | Bitcoin vs Dogecoin | Explained by Dhruv Rathee',
      category: 'Cryptocurrency',
      embed: '_zhADvmUJe0',
    },
     {
      title:
        'TCS Technical Interview Sure Shot Questions & Answers:2021||By TCS Employee||MUST Watch To Crack .    ',
      category: 'Songs',
      embed: 'tHP9TW0wXSw',
    },
    {
      title:
        'Top 5 Cryptocurrency for Long Term HODL | Cryptocurrency',
      category: 'Cryptocurrency',
      embed: 'Cvktxg5T00Q',
    },
    {
      title:
        'How to Answer in Technical Interview (Best Technical Interview tips)',
      category: 'Cryptocurrency',
      embed: 'e0E6-dRPcJA',
    },
    {
      title: 'The Kid LAROI, Justin Bieber - STAY (Official Video)      ',
      category: 'Songs',
      embed: 'kTJczUoc26U',
    },
    {
      title: 'Troye Sivan - YOUTH (Official Video)      ',
      category: 'Songs',
      embed: 'XYAghEq5Lfw',
    },
    {
      title:
        "Dekha Hazaro Dafaa | Rustom | Akshay Kumar & Ileana D'cruz | Arijit Singh , Palak M| Jeet Gannguli      ",
      category: 'Songs',
      embed: 'ImnYPjOd1Tw',
    },
    {
      title:
        'Ed Sheeran - Beautiful People (feat. Khalid) [Official Music Video]      ',
      category: 'Songs',
      embed: 'mj0XInqZMHY',
    },
    {
      title:
        'BILLO || J STAR || Full Official Video || J STAR Productions      ',
      category: 'Songs',
      embed: 'wEqifG8ATBI',
    },
    {
      title:
        'Miss India 2021 New Released Hindi Dubbed Movie | Keerthy Suresh, Jagapathi Babu, Rajendra Prasad      ',
      category: 'Movies',
      embed: 'SbSTTfnEMZM',
    },
      {
        title:
        'Accenture Interview Questions | Most Asked HR and Technical Questions |     ',
        category: 'Technical',
        embed:'guIFfRZ47JA',
      },
    
    {
      title: 'PK HD Movie Superhit (With English Subtitles)      ',
      category: 'Movies',
      embed: 'D4HvmICrC8w',
    },
    {
      title:
        'Firangi Full Movie HD 2017 1080p Download Kapil Sharma Ishita Dutta      ',
      category: 'Movies',
      embed: 'gfIRgHhm7zk',
    },
    {
      title:
        'Hrithik Roshan Aishwarya Rai Sonu Sood Hindi Full Movie HD | New Hindi Action Movie JODHA AKBAR      ',
      category: 'Movies',
      embed: 'wgDo0dLm1V4',
    },
    {
      title:
        '2 States Full Movie Arjun Kapoor New Released Bollywood Movie 2021 | Latest Love Story Movie 2021 Hd      ',
      category: 'Movies',
      embed: 'neB7WugMKT4&t=1s',
    },
    {
      title:
        'ABCD 2 Movie | Prabhu Deva Bollywood HD Movies | Hindi Action HD Movies      ',
      category: 'Movies',
      embed: 'ySnKGxhA1fA&t=1s',
    },
    {
      title:
        'Humshakal Hindi Full Movie | Starring Saif Ali Khan, Riteish Deshmukh, Bipsha Basu, Tamannaah Bhatia      ',
      category: 'Movies',
      embed: 'KcxTtbZRrxs&t=1s',
    },
    {
      title:
        'Luka Chuppi Full Hindi Movie | Starting Kartik Aaryan,Kriti Sanon,Aparshakti Khurana,Pankaj Tripathi      ',
      category: 'Movies',
      embed: 'P82Vp6Ww4mc&t=1s',
    },
    {
      title:
        'Dhol - Superhit Bollywood Comedy Movie - Rajpal Yadav | Kunal Khemu | Tusshar Kapoor | Sharman Joshi      ',
      category: 'Movies',
      embed: 'CRzvimM6ZJk',
    },
    {
      title: `"Hichiko a dog's tale" english full movie (Indonesian subtitles)`,
      category: 'Movies',
      embed: 'gT7iSTrQk9w&t=5s',
    },
    {
      title:
        '🔴 Complete JavaScript Tutorial in Hindi in 2021     ',
      category: 'Technical',
      embed: 'KGkiIBTq0y0',
    },
    {
      title:
        'Entertainment | Full Movie | Akshay Kumar, Tamannaah Bhatia, Johnny Lever      ',
      category: 'Movies',
      embed: 'LXXkiUKDK4w',
    },
    {
      title:
      'Accenture Interview Questions | Most Asked HR and Technical Questions |     ',
      category: 'Technical',
      embed:'guIFfRZ47JA',
    },
    {
      title: 'Ramaiya Vastavaiya 2013 Full Movie      ',
      category: 'Movies',
      embed: 'y3SSlgKCCzk',
    },
    {
      title: '20 Technical Business Ideas to Start Your Own Business      ',
      category: 'Technical',
      embed: 'tKE8ufsrNzE',
    },
    {
      title:
        'Pam8403 power class d amplifier|| Bluetooth speaker|| T.S.B Technical || #technical      ',
      category: 'Technical',
      embed: '41pzfMFTnFQ',
    },
    {
      title:
        "Making RC Wooden Tractor. Making mini tractor from wood /#Technical bro's #Toy #Cars.      ",
      category: 'Technical',
      embed: 'SOn78NBfmYI',
    },
  ];

  filteredVideos = [] as any;

  searchTerm = '';

  fliterCategory: string = '';

  constructor(
    private sanitzer: DomSanitizer,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.data.subscribe((category: any) => {
      this.fliterCategory = category;
      this.filterVideos(category);
    });
    this.categoryService.searchTerm.subscribe((searchTerm: any) => {
      this.searchTerm = searchTerm;
      console.log(this.searchTerm);
      this.searchFilter();
    });
  }
  getEmbedUrl(item: any) {
    return this.sanitzer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/` + item.embed
    );
  }

  filterVideos(category: any) {
    if (category == 'All') {
      this.filteredVideos = this.videoList;
    } else {
      this.filteredVideos = this.videoList.filter((item: any) => {
        return item.category == category;
      });
    }
  }
  searchFilter() {
    this.searchTerm = this.searchTerm.toLowerCase();
    this.filteredVideos = this.videoList.filter((item: any) => {
      item.title = item.title.toLowerCase();

      return item.title.includes(this.searchTerm);
    });
  }
}
