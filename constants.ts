
import { Project, NewsItem, BlogPost, Service } from './types';

/**
 * ニュースを新しく追加するには、以下の NEWS_ITEMS 配列の先頭に
 * 新しいオブジェクトを追加してください。
 */
export const NEWS_ITEMS: NewsItem[] = [
  { 
    id: 'n1', 
    date: '2025.01.10', 
    category: 'RELEASE', 
    title: 'NoppoBrowser 3.5 公開。メモリ効率をさらに最適化。',
    content: 'NoppoBrowserの最新バージョン3.5をリリースしました。今回のアップデートでは、ガベージコレクションのアルゴリズムを根本から見直し、高負荷なWebアプリケーション実行時のメモリ消費量を従来比で約30%削減することに成功しました。Summitエンジンによるレンダリング速度も向上しています。'
  },
  { 
    id: 'n2', 
    date: '2024.12.15', 
    category: 'PROTOCOL', 
    title: 'NML (Noppo Markup Language) 標準化ロードマップ 2025 を発表。',
    content: '次世代マークアップ言語「NML」の2025年度標準化ロードマップを公開しました。第1四半期にはモジュール化されたスタイル定義の導入、第2四半期にはデータバインディング機能のネイティブサポートを予定しています。HTMLからの移行を容易にするコンバーターツールも開発中です。'
  },
  { 
    id: 'n3', 
    date: '2024.11.20', 
    category: 'STUDIO', 
    title: 'NoppoStudio 渋谷ラボでの開発者向けイベントを開催。',
    content: 'NoppoStudio 渋谷ラボにて、第3回「Summit Engine 深掘り勉強会」を開催しました。当日は30名のエンジニアに参加いただき、ブラウザエンジン内部の最適化手法や、NMLを用いた高速なフロントエンド構築について活発な議論が行われました。'
  },
  { 
    id: 'n4', 
    date: '2024.10.05', 
    category: 'UPDATE', 
    title: 'Utility Network のツール数が 150 を突破しました。',
    content: 'Noppo Networkが提供する単機能ウェブツール群が、合計150ツールを突破しました。最近追加された「Noppo SVG Optimizer」や「NML JSON Formatter」は、開発現場での利用が急速に拡大しています。今後も「1日1改善」をスローガンに拡張を続けます。'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    date: '2025.01.05',
    title: 'ブラウザエンジンを自作する喜びと苦悩',
    excerpt: 'なぜ我々は Chromium ではなく、独自のレンダリングコアに拘り続けるのか。その技術的挑戦のすべて。',
    author: 'Chief Architect',
    content: '現代のWebブラウザ市場は、Chromiumベースのエンジンに支配されています。しかし、私たちはあえて独自の「Summitエンジン」を一から開発することを選びました。それは、既存のエンジンの制約に縛られず、メモリ管理やスレッド実行モデルを極限まで最適化するためです。もちろん、標準仕様への準拠という気の遠くなるような作業が伴いますが、その先にある「本当の高速化」こそが私たちの目的です。'
  },
  {
    id: 'b2',
    date: '2024.12.20',
    title: 'NMLが実現する、次世代のドキュメント構造',
    excerpt: 'HTMLが抱える歴史的負債を清算し、シンプルかつ強力な表現力を手に入れるためのアプローチ。',
    author: 'Language Designer',
    content: 'HTMLは素晴らしい言語ですが、30年以上の歴史の中で多くの「複雑さ」を抱え込んできました。NML (Noppo Markup Language) は、その複雑さを削ぎ落とし、ドキュメントの論理構造をより明確に記述することを目指しています。閉じタグの省略記法の最適化や、コンテキストに基づいた自動的な要素の推論など、現代のエンジニアが「読みやすく、書きやすい」と感じる構文を定義しています。'
  }
];

export const CORE_PRODUCTS: Project[] = [
  {
    id: 'noppobrowser',
    title: 'NoppoBrowser',
    category: 'The High-Speed Browser',
    description: '一切の無駄を省き、速度とプライバシーを極限まで追求したプロフェッショナル向けブラウザ。独自のSummitエンジンが異次元のレスポンスを実現します。',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200',
    tags: ['Summit Engine', 'Zero Tracking', 'Hyper Fast'],
    link: 'https://browser.noppo.f5.si'
  },
  {
    id: 'nml',
    title: 'NML Protocol',
    category: 'Markup Language Standard',
    description: 'HTMLの次を行く、直感的で論理的な新しいマークアップ言語規格。コードの美しさが、そのままユーザー体験の質へと繋がります。',
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1200',
    tags: ['Semantic Standard', 'Logic First', 'Ultra Lightweight'],
    link: 'https://nml.noppo.f5.si'
  }
];

export const PROJECTS: Project[] = CORE_PRODUCTS;

export const UTILITIES = [
  { name: 'Noppo Code', desc: 'ブラウザ上で動作する超高速コードエディタ', icon: 'fa-code' },
  { name: 'Noppo Image', desc: 'AIを活用した次世代画像圧縮・変換ハブ', icon: 'fa-file-image' },
  { name: 'Noppo Graph', desc: 'NMLベースで記述する動的図解ツール', icon: 'fa-diagram-project' },
  { name: 'Noppo Font', desc: 'コーディングと読書に最適な独自フォント', icon: 'fa-font' }
];

export const SERVICES: Service[] = [
  {
    icon: 'fa-globe',
    title: 'オープン規格の策定',
    description: 'NMLを通じて、ウェブの情報構造をより透明で扱いやすいものに変えていきます。'
  },
  {
    icon: 'fa-microchip',
    title: '独自エンジンの開発',
    description: '既存のブラウザエンジンの制約に縛られない、真に自由な実行環境を構築します。'
  },
  {
    icon: 'fa-shield-halved',
    title: 'プライバシーの最前線',
    description: '利用者のデータを守ることは、クリエイティビティを守ることと同義だと考えています。'
  },
  {
    icon: 'fa-rocket',
    title: '制作の高速化',
    description: '開発者が本質的な創作に集中できるよう、無数の周辺ツールを提供します。'
  }
];
